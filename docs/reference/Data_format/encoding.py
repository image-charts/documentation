import math

EXTENDED_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.'
EXTENDED_MAP_LENGTH = len(EXTENDED_MAP)

def extendedEncode(arrVals, maxVal):
    """Encodes a single series into extended encoding (let you specify integer values from 0-4095)

    >>> extendedEncode([0,100,400,400,600,110,14,17,23,28,33,36,43,59,65], 601)
    'e:AAKpqmqm.5LtBfBzCcC-DgD1ElGSG6'

    >>> extendedEncode([90, 1000, 2700, 3500], 3500)
    'e:BpSSxX..'

    >>> extendedEncode([3968, -1, 1100, 250], 3968)
    'e:..__RvEC'
    """
    chartData = 'e:'
    for val in arrVals:
        numericVal = float(val)
        scaledVal = int(math.floor(EXTENDED_MAP_LENGTH * EXTENDED_MAP_LENGTH * numericVal / maxVal))
        if scaledVal > (EXTENDED_MAP_LENGTH * EXTENDED_MAP_LENGTH - 1):
            chartData += '..'
        elif scaledVal < 0:
            chartData += '__'
        else:
            quotient = int(math.floor(scaledVal / EXTENDED_MAP_LENGTH))
            remainder = scaledVal - EXTENDED_MAP_LENGTH * quotient
            chartData += EXTENDED_MAP[quotient] + EXTENDED_MAP[remainder]
    return chartData

# only used to run python doctest
if __name__ == "__main__":
    import doctest
    doctest.testmod()
