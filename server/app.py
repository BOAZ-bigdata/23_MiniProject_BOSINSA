from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
import cv2
import numpy as np
from keras.models import load_model
from keras.layers import MultiHeadAttention, LayerNormalization

app = FastAPI()

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

model = load_model("VGG16T_Model.h5", custom_objects={
    "MultiHeadAttention": MultiHeadAttention,
    "LayerNormalization": LayerNormalization
})

label_mapping = {
    0: "spring",
    1: "summer",
    2: "fall",
    3: "winter"
}

def preprocess_image(image, img_size=(128, 128)):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    if len(faces) == 0:
        raise ValueError("No face detected in the image.")
    x, y, w, h = faces[0]
    face_image = image[y:y+h, x:x+w]
    face_image = cv2.resize(face_image, img_size)
    face_image = face_image / 255.0
    return np.expand_dims(face_image, axis=0)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        nparr = np.frombuffer(contents, np.uint8)
        image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if image is None:
            raise ValueError("Uploaded file is not a valid image.")

        processed_image = preprocess_image(image)
        predictions = model.predict(processed_image)
        predicted_class = np.argmax(predictions, axis=-1)[0]
        confidence = float(predictions[0][predicted_class])

        return JSONResponse({
            "predicted_color": label_mapping[predicted_class],
            "confidence": confidence
        })

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")

@app.get("/")
async def root():
    return {"message": "Personal Color Prediction API is running!"}
