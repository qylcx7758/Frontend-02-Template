function kmp(source, pattern) {

    let table = new Array(pattern.length).fill(0);

    {
        let i = 1;
        let j = 0;

        while (i < pattern.length) {
            if (pattern[i] === pattern[j]) {
                j++, i++;
                table[i] = j;
            } else {
                if (j > 0)
                    j = table[j]
                else
                    ++i;
            }
        }
    }

    {
        let i = 0,
            j = 0;
        while (i < source.length) {

            if (source[i] === pattern[j]) {
                i++, j++;
            } else {
                if (j > 0)
                    j = table[j];
                else
                    ++i;
            }

            if (j === pattern.length)
                return i - pattern.length;
        }
    }

    return -1;
}

kmp("abcdbc", "abcdabce")