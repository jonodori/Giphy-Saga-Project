 Base Mode
 [] Search View ( will need to make this a componet)
    [] Allow a user to enter a search request and submit that request
        [] Need an input feild for this
        <!-- [] Potentionallly a form as well -->
    []  Display the results on the Dom 
    []  Allow a user to favorite an of the resulting images
        [] Will need some sort of button to click and display a favorite
[] Favorites view( Will need to make this a componet)
    [] Allow a user to see all the Giphy images the have favorites
        [] The actuall images need to appear on the dom
    []  Allow a user to set a category for a favorite image
        []  Each favorite image can only have 1 category at a time
        []  The category needs to be one of the categories in the database
    
    [] Existing Routes section
        []- `POST /api/favorite` (incomplete)
                 - For adding a new favorite image. You'll need to think about what is needed. Does it need a category?
        []- `PUT /api/favorite` (incomplete)
                 - For setting a category on an image. It expects both a query parameter and a data body. Feel free to change it as needed.
     