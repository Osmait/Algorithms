from solutions import hoop_count


def test_hoop_count():
    result = hoop_count(5)
    print(result)
    expect = "Great, now move on to tricks"
    assert(result == expect) 