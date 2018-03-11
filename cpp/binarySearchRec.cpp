// Binarysearch
// O (log N) 
//
// Recursive implementation

#include <iostream>

using namespace std;

int BinarySearch(int A[], int low, int high, int x)
{
    if (low > high) return -1;

    int mid = low + (high - low) / 2;
    
    if (x == A[mid]) return mid;
    else if (x < A[mid]) return BinarySearch(A, low, mid - 1, x);
    else return BinarySearch(A, mid + 1, high, x);
}

int main()
{
    int x;
    int A[] = {2, 4, 5, 7, 13, 14, 15, 23};
    cout << "Enter a number? " << endl;
    cin >> x;
    int  index = BinarySearch(A, 0, 8, x);

    if (index != -1) cout << "Number " << x << " is at index " << index << endl;
    else cout << "Number " << x <<" not found" << endl;

    return 0;
}
