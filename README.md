### Project Description:

Exercise Criteria:

Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a `Sandwich` module, then create the following as individual modules, using IIFE syntax, to augment `Sandwich`:  

+ bread
+ meat
+ cheese
+ condiments
+ veggies  

The project should have one HTML file that has:

+ A section of options for each sandwich part 
+ The ability to select multiple, or zero, choices for each section (such as turkey _and_ bacon, or "no meat") 
+ An empty DOM element into which the final sandwich order and its cost will be inserted  

The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. `{"turkey": 0.90, "bacon": 1.50}` 

The ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.  

Each IIFE should expose, in its public interface, a method named `add{ingredient}` (e.g. `addMeat` or `addVeggies`) that accepts a single argument. That argument's value should be the ingredient selected by the user.

Create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

### Technologies used:

HTML, Javascript.

### How to run this project (Node must be installed on your machine):

```
git clone https://github.com/isabelramos/sandwich-maker.git
cd sandwich-maker
npm install http-server -g
http-server -p 8080
This will show in your browser at: http://localhost:8080
```

### Contributors:
[Isabel Ramos](https://github.com/isabelramos)