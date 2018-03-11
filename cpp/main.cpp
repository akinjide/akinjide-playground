#include <iostream>
#include <vector>
#include <functional>

auto main()->int {
    std::cout << "Hello, World!" << std::endl;

    std::vector<int> intvector;



    intvector.push_back(5);
    intvector.push_back(56);

    auto x = std::for_each(intvector.begin(), intvector.end(), [&](int element){std::cout << element + 30 << std::endl;});

    for(int i : intvector) {
        std::cout << i << std::endl;
    }

    return EXIT_SUCCESS;
}