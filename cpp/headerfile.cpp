// include below is called preprocessor directive, it means 
// this it is processed before it is compiled. A multi state process
#include <iostream>
#include "headerfile.h"
#include "widget.h"

using namespace std;

// You can either cut and paste the function you want to call here.
// Or you reference aka. (Function Prototype) the function from here. Since c++ reads top to bottom.

//int getAge();

int main()
{
    int Age;
    Age = getAge();
    sayHelloWorld();
    cout << Age << endl;

    return 0;
}
/*
int getAge()
{
    return 22;
}
*/
