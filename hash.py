import hashlib
import sys

filename = sys.argv[1]


sha256_hash = hashlib.sha256()
with open(filename,"rb") as f:
   for byte_block in iter(lambda: f.read(4096),b""):
      sha256_hash.update(byte_block)
   print(sha256_hash.hexdigest())