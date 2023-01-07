from containsDuplicate import containsDuplicate
from valid_anagram import isAnagram
from two_sum import twoSum
from data import prueba



def test_containsDuplicate():
    assert containsDuplicate(prueba) == False

def test_anagram():
    assert isAnagram("aacc","ccac") == False

def test_two_sum():
    assert(twoSum([4,7,11,15],11) == [0,1])