// Binarysearch
// O (log N) 
//
// Interative implementation

#include <iostream>

using namespace std;

int BinarySearch(int A[], int n, int x)
{
    int low = 0, high = n - 1;
    while(low <= high)
    {
        int mid = (low + high) / 2;
        if (x == A[mid]) return mid;
        else if (x < A[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

int main()
{
    int x;
    int A[] = {2, 4, 5, 7, 13, 14, 15, 23};
    cout << "Enter a number? " << endl;
    cin >> x;
    int  index = BinarySearch(A, 8, x);

    if (index != -1) cout << "Number " << x << " is at index " << index << endl;
    else cout << "Number " << x <<" not found" << endl;

    return 0;
}
