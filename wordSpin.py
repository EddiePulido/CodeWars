def spin_words(sentence):
    arr = sentence.split()
    result = []
    
    for word in arr:
        if len(word) >= 5:
            result.append(word[::-1])
        else:
            result.append(word)
            
    return ' '.join(result)