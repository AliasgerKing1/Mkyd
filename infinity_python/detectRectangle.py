import cv2
import os

from cropImages import crop_image
def detection(image_path, output_directory) :
    # read input image
    image = cv2.imread(image_path)
    
    # Get the width height, x and y coordinate
    width, height, channels = image.shape
    
    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Apply adaptive thresholding to obtain a binary image
    _, threshold = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    
    # Find contours in the binary image
    contuors, _ = cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_directory) :
        os.mkdir(output_directory)
        
    # Store the rectangles' information in a list
    all_rectangles = []
    for i, contuor in enumerate(contuors) :
        # Approximate the contour to a polygon
        perimeter = cv2.arcLength(contuor, True)
        approx = cv2.approxPolyDP(contuor, 0.04 * perimeter, True)
        # Check if the polygon has four sides (a rectangle)
        if len(approx) == 4 :
            # Get the bounding box of the rectangle
            x, y, width , height = cv2.boundingRect(approx)
            
            # Crop the rectangle from the original image
            cropped_image = image[y : y + height, x : x + width]
            # Save the cropped image as a separate file
            output_path = os.path.join("parent_rectangles", f"rectangle{i + 1}.png")
            cv2.imwrite(output_path, cropped_image)
            print(f"Saved rectangle{i + 1} as {output_path}")
            # Store the rectangle's information
            all_rectangele_info = {
                "X" : x,
                "Y" : y,
                "Width" : width,
                "Height" : height,
                "Output_path" : output_path
            }
            all_rectangles.append(all_rectangele_info)
            img = crop_image(f"parent_rectangles/rectangle{i + 1}.png", 20)

            # Get the width height, x and y coordinate
            




image_path = "input_1.png"
output_directory = "cut_rectangles"
detection(image_path, output_directory)