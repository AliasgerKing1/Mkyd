# https://strapi.io/
# https://orangedatamining.com/
import cv2
import os
import requests

anchor = []
anchor2 = []
anchor3 = []
image_pos = []
def crop_image(image_path, crop_size):
    # Read the image using OpenCV
    image = cv2.imread(image_path)
    if image is None:
        print("Error loading image:", image_path)
        return None
    else :
        # Get the original image dimensions
        height, width, _ = image.shape

        # Calculate the crop coordinates
        left = crop_size
        top = crop_size
        right = width - crop_size
        bottom = height - crop_size

        # Crop the image
        cropped_image = image[top:bottom, left:right]

        return cropped_image    

# def is_rectangle_nested(rect1, rect2):
#     x1, y1, w1, h1 = rect1
#     x2, y2, w2, h2 = rect2
    
#     # Check if all four corners of rect2 are inside rect1
#     top_left_inside = x1 <= x2 <= x2 + w2 <= x1 + w1 and y1 <= y2 <= y2 + h2 <= y1 + h1
#     top_right_inside = x1 <= x2 + w2 <= x2 <= x1 + w1 and y1 <= y2 <= y2 + h2 <= y1 + h1
#     bottom_left_inside = x1 <= x2 <= x2 + w2 <= x1 + w1 and y1 <= y2 + h2 <= y2 <= y1 + h1
#     bottom_right_inside = x1 <= x2 + w2 <= x2 <= x1 + w1 and y1 <= y2 + h2 <= y2 <= y1 + h1

#     return top_left_inside and top_right_inside and bottom_left_inside and bottom_right_inside

def detect_and_cut_rectangles(image_path, output_directory):
    # Load the image
    image = cv2.imread(image_path)
    
    # Get the width and height
    width1, height1, channels = image.shape
    anchor.append(width1*0.6)
    anchor.append(height1*0.4)
    anchor2.append(width1*0.4)
    anchor2.append(height1*0.4)
    anchor3.append(width1*0.5)
    anchor3.append(height1*0.4)
    image_pos.append(width1*0.6)
    image_pos.append(height1*0.5)
    
    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply adaptive thresholding to obtain a binary image
    _, threshold = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    # Find contours in the binary image
    contours, _ = cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Create the output directory if it doesn't exist
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # Store the rectangles' information in a list
    rectangles = []
    last_i = None  # Initialize last_i variable
    # Cut and save each detected rectangle as a separate image
    for i, contour in enumerate(contours):
        # Approximate the contour to a polygon
        perimeter = cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, 0.04 * perimeter, True)
        # Check if the polygon has four sides (a rectangle)
        if len(approx) == 4:
            # Get the bounding box of the rectangle
            x, y, width, height = cv2.boundingRect(approx)
            # Crop the rectangle from the original image
            cropped_image = image[y:y + height, x:x + width]

            # Save the cropped image as a separate file
            output_path = os.path.join(output_directory, f"rectangle_{i + 1}.png")
            cv2.imwrite(output_path, cropped_image)
            print(f"Saved rectangle {i + 1} as {output_path}")
        # Store the rectangle's information
            rectangle_info = {
            'x': x,
            'y': y,
            'width': width,
            'height': height,
            'output_path': output_path
        }
        rectangles.append(rectangle_info)
        last_i = i + 1  # Update last_i with the current value of i
    return rectangles, last_i 

# # Example usage
# rect1 = (10, 10, 100, 100)
# rect2 = (30, 30, 50, 50) 
# rect3 = (150, 150, 50, 50)

# print(is_rectangle_nested(rect1, rect2))  # True (rect2 is nested inside rect1)
# print(is_rectangle_nested(rect1, rect3))  # False (rect3 is not nested inside rect1)

# Generate HTML code based on the detected text
div_str = ""
navUl = 0
imageUl = 0
nav_text = ["", "about", "contact", "services", "shop", "tournaments", "pricing"]
# Example usage
image_path = "test5.png"
output_directory = "cut_image"
rectangles,last_i = detect_and_cut_rectangles(image_path, output_directory)
img = crop_image("cut_image/rectangle_1.png", 20)
output_path2 = os.path.join("test", f"rectangle_xxxxx1.png")
cv2.imwrite(output_path2, img)
print(f"Saved rectangle x1 as {output_path2}")
nested_output_directory = "cut_image"
nest_rect = []
# Convert the image to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Apply adaptive thresholding to obtain a binary image
_, threshold = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

# Find contours in the binary image
contours, _ = cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

for i, contour in enumerate(contours):

        # Approximate the contour to a polygon
        perimeter = cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, 0.04 * perimeter, True)
        nest_rect.append(approx)
        # Check if the polygon has four sides (a rectangle)
        if len(approx) == 4:
            # Get the bounding box of the rectangle
            x, y, width, height = cv2.boundingRect(approx)
            # Crop the rectangle from the original image
            cropped_image = img[y:y + height, x:x + width]

            # Save the cropped image as a separate file
            output_path = os.path.join(nested_output_directory, f"rectangle_{last_i + i + 1}.png")
            cv2.imwrite(output_path, cropped_image)
            print(f"Saved rectangle {last_i + i + 1} as {output_path}")
        # Store the rectangle's information
            rectangle_info2 = {
            'x': x,
            'y': y,
            'width': width,
            'height': height,
            'output_path': output_path
        }
        nest_rect.append(rectangle_info2)
        response2 = requests.get(f"https://api.ocr.space/parse/imageurl?apikey=K84422514688957&url=https://30fe-183-87-13-244.ngrok-free.app/dummy/rectangle_{last_i + i+1}.png")


        if response2.status_code == 200:
            # Success: Extract text from the response
            response_data = response2.json()
            parsed_text2 = response_data['ParsedResults'][0]['ParsedText']
            text2 = parsed_text2.strip()
            print("detected text -", text2)
            
for i, rectangle in enumerate(rectangles):
    # print(f"Rectangle {i+1}:")
    # print(f"Position: ({rectangle['x']}, {rectangle['y']})")
    # print(f"Width: {rectangle['width']}")
    # print(f"Height: {rectangle['height']}")
    # print(f"Saved image path: {rectangle['output_path']}")
    response = requests.get(f"https://api.ocr.space/parse/imageurl?apikey=K82315508888957&url=https://30fe-183-87-13-244.ngrok-free.app/cut_image/rectangle_{i+1}.png")


    if response.status_code == 200:
        # Success: Extract text from the response
        response_data = response.json()
        parsed_text = response_data['ParsedResults'][0]['ParsedText']
        text = parsed_text.strip()
        print("detected text -", text)
        if text == "head" :
            # print(rectangles[i]['x'])
            div_str += "<h1 style='height:#h#px;width:#w#px; position : fixed; left : #x#px; top : #y#px;'>heading</h1>".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width'])).replace(
            "#x#", str(rectangles[i]['x'])).replace("#y#", str(rectangles[i]['y']))
        elif text == "para" :
            # print(rectangles[i])
            div_str += "<p style='height:#h#px;width:#w#px; position : fixed; left : #x#px; top : #y#px;'>para</p>".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width'])).replace(
            "#x#", str(rectangles[i]['x'])).replace("#y#", str(rectangles[i]['y']))
        elif text == "button" :
            # print(rectangles[i])
            div_str += "<button type='button' style='height:#h#px;width:#w#px; background : #9C27B0; border : none; border-radius : 50%; color : #fff;'>button</button>".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width']))
        elif text == "sbutton" :
            # print(rectangles[i])
            div_str += "<button type='submit' style='height:#h#px;width:#w#px; background : #9C27B0; border : none; border-radius : 50%; color : #fff;'>submit</button>".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width']))
            # print(rectangles[i])
        elif text == "image" :
            if rectangles[i]['y'] < image_pos[1] and rectangles[i]['x'] > anchor[0] :
                # if imageUl == 0:
                #     div_str += """<div class='row'><div class='col-md-6'>"""
                # else :
                div_str += "<img src='./a.jpg' style='height : #h#px'; width : 'auto' />".replace("#h#", str(rectangles[i]['height']))
                # imageUl += 1
        elif text == "anchor":
            if rectangles[i]['y'] < anchor[1] and rectangles[i]['x'] > anchor[0]:
                if navUl == 0:
                    div_str += """<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0"> <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>"""
                else:
                    div_str += """<li class="nav-item">
          <a class="nav-link" href="#">#txt#</a>
        </li>""".replace("#txt#", nav_text[i])
        # .replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width'])).replace("#x#", str(rectangles[i]['x'])).replace("#y#", str(rectangles[i]['y']))
                navUl += 1
            elif rectangles[i]['y'] < anchor2[1] and rectangles[i]['x'] < anchor2[0]:
                if navUl == 0:
                    div_str += """<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>"""
                else:
                    div_str += """<li class="nav-item">
          <a class="nav-link" href="#">#txt#</a>
        </li>""".replace("#txt#", nav_text[i])
                navUl += 1

            elif rectangles[0]['y'] < anchor3[1] and rectangles[0]['x'] < anchor3[0] and rectangles[-1]['x'] > anchor3[0]:
                if navUl == 0:
                    div_str += """<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav justify-content-center mb-2 mb-lg-0" > <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>"""
                else:
                    div_str += """<li class="nav-item">
          <a class="nav-link" href="#">#txt#</a>
        </li>""".replace("#txt#", nav_text[i])
                navUl += 1

    else :
        print("wait times end")
     
# # Write the HTML output to file
with open("code/index.html", "w") as wFile:
    wFile.write("""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible
" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--bootstrap css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" .>
    <title>Document</title>
</head>
<body>
    <!--#div#--> 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="row">
<div class="col-md-2">
<div style="background-color : aqua; height : 570px; width : auto"></div>
</div>
<div class="col-md-4">
<h2>hii</h2>
</div>
<div class="col-md-6">
<img src="./a.jpg" class="img-thumbnail" alt="image" style="height : 200px; width : 400px" />
</div>
</div>
            <!--bootstrap js-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>""".replace("#div#", div_str))