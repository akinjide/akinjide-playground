#include <iostream>
#include <string>

using namespace std;

int main()
{
    // C style
    // ends with char 0 so that the compiler knows that's the end of the string.
    char Name[80] = {'\0'};

    // Preintialize
    // char Name[80] = {'A', 'k', 'i', 'n', 'j', 'i', 'd', 'e', '\0'};
    // char Name[] = 'Akinjide';

    cout << "Your Name? " << endl;
    cin >> Name;
    cout << "Hello, " << Name << endl;

    // C++ style
    string comName = "Ava";
    cout << endl << "This Computer's named " << comName << endl;

    return 0;
}
