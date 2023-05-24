import cv2

def detect_small_rectangles(image_path):
    # Load the image
    image = cv2.imread(image_path)

    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply edge detection to find the contours
    edges = cv2.Canny(gray, 50, 150)

    # Find the contours in the image
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Filter the contours based on area and aspect ratio
    min_area = 100  # Minimum area of small rectangles
    max_aspect_ratio = 1.5  # Maximum aspect ratio of small rectangles
    detected_rectangles = []
    for contour in contours:
        x, y, w, h = cv2.boundingRect(contour)
        aspect_ratio = float(w) / h

        # Filter based on area and aspect ratio
        if cv2.contourArea(contour) > min_area and aspect_ratio < max_aspect_ratio:
            detected_rectangles.append((x, y, w, h))

    return detected_rectangles

# Example usage
image_path = 'test5.png'
rectangles = detect_small_rectangles(image_path)

# Load the image
image = cv2.imread(image_path)

# Draw rectangles on the image
for rect in rectangles:
    x, y, w, h = rect
    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)

# Display the image with rectangles
cv2.imshow('Detected Rectangles', image)
cv2.waitKey(0)
cv2.destroyAllWindows()