class ternary {

    d(isSome, isValide) {
        return isSome
            ? 'a'
            : isValide
                ? 'b'
                : 'c'
    }

    d2(isSome, isValide) {
        return (
            isSome ? 'a'
                : isValide ? 'b'
                    : 'c'
        )
    }

}
