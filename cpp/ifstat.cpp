#include <iostream>

using namespace std;

int main()
{
    int i = 3;

    if (i > 1) 
    {
        cout << "yes" << endl;
        if (i < 5)
        {
            cout << "less than 5" << endl;
        }
        else
        {
            cout << "more than 5" << endl;
        }
    }
    else
    {
        cout << "no" << endl;
    }

    return 0;
}
