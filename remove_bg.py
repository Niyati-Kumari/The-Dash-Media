from PIL import Image
import os

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Calculate brightness (luminance)
        # item is (R, G, B, A)
        brightness = (item[0] + item[1] + item[2]) / 3
        
        # If it's very dark, make it transparent
        if brightness < 60: # Threshold for dark background
            newData.append((255, 255, 255, 0))
        else:
            # Scale alpha based on brightness for smoother edges
            alpha = int(min(255, brightness * 1.5))
            newData.append((255, 255, 255, alpha))

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

input_file = "c:/Users/ASUS/OneDrive/Desktop/dash-media/Dash-Media-/public/logo.png"
output_file = "c:/Users/ASUS/OneDrive/Desktop/dash-media/Dash-Media-/public/logo-transparent.png"

if os.path.exists(input_file):
    remove_background(input_file, output_file)
else:
    print("Input file not found")
