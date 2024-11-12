# split_audio.py
import sys
from spleeter.separator import Separator

def main(input_path, output_path):
    separator = Separator('spleeter:2stems')  # 2 stems: vocals and accompaniment
    separator.separate_to_file(input_path, output_path)

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
