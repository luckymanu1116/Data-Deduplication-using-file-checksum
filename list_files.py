import os
import sys

path = sys.argv[1]

for root,d_names,f_names in os.walk(path):
   for f in f_names:
      print(os.path.join(root, f))