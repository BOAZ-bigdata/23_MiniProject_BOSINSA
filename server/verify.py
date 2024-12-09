import h5py

file_path = "VGG16T_Model.h5"

try:
    with h5py.File(file_path, "r") as f:
        print("File structure:")
        f.visit(print)
except Exception as e:
    print(f"Error opening the file: {e}")
