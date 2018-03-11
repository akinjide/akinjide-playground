#include <iostream>

using namespace std;

int main()
{
    int i = 0;
    // difference between a while and do while is
    // while condition is checked before the block is executed.
    // do while block is run once befoere condition is checked.
    while(i < 10)
    {
        cout << i << endl;
        i++;
    }
   
    cout << endl << "starting do loop" << endl;

    do
    {
        cout << i << endl;
        i++;
    } while(i < 10);

    return 0;
}
