#include <stdio.h>
#include <iostream>

using namespace std;

int main()
{
    int i, j;
    string no("");

    for (i = 5; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            cout << "*" << no;
        }
        cout << "\n" << no;
    }
    return 0;
}
