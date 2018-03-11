#include <iostream>

using namespace std;

int main()
{
    int i = 1;
    int j = 9;

    switch(i)
    {
        case 1:
            cout << "One" << endl;
            if (j > 0)
            {
                cout << "j > 0" << endl;
            }
            break;
        case 2:
            cout << "Two" << endl;
            break;
        default:
            cout << "Others" << endl;
            break;
    }

    return 0;
}
