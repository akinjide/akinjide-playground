#include <iostream>

using namespace std;

// By Value
void Test(int Number)
{
    cout << "Step 1 " <<  Number << endl;
    Number++;
    cout << "Step 2 "<< Number << endl;
}

// By Reference
void Test2(int &Number)
{
    cout << "Step 1 " <<  Number << endl;
    Number++;
    cout << "Step 2 "<< Number << endl;
}

int main()
{
    int MyNum = 1;
    Test2(MyNum);
    cout << "Step 3 " << MyNum << endl;

    return 0;
}
