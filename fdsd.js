'use strict';

<script>
    var outerFunction = function() {

      var x = 5;

      var nestedFunction = function() {

        var y = 7;

        // What will this print?
        console.log("X: " + x);

        // What will this print?
        console.log("Y: " + y);

        var z = 10;
        // What will this print?
        console.log("Z (inside): " + z);
      };

      return nestedFunction;
    };

    var myFunction = outerFunction();
    myFunction();

    // What will this print?
    console.log("Z (outside): " + z);

