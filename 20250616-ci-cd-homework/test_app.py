import unittest
from flask_app import add


class TestAddFunction(unittest.TestCase):
    def test_add_negative(self):
        self.assertEqual(add(-1, -1), -2)


if __name__ == "__main__":
    unittest.main()
