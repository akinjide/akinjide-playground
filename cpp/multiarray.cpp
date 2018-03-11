#include <iostream>

using namespace std;

int main()
{
    int line[5][2];

    //{99,98, 97,96 };

    line[0][0] = 99;
    line[0][1] = 98;

    line[1][0] = 97;
    line[1][1] = 96;

    cout << line[0][1] << endl;

    return 0;
}
