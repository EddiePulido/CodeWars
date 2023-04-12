const uniqueInOrder = iterable => [...iterable].filter((e,i,a) => e !== a[i+1])
