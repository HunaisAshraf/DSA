<h1>Hash Table</h1>
    Also known as Hash Map, is a data structure that is used to store key-value pairs. Given a key, you can associate a value with that key for very fast lookup. A Hash table is defined as a data structure used to insert, look up, and remove key-value pairs quickly. It operates on the hashing concept, where each key is translated by a hash function into a distinct index in an array. The index functions as a storage location for the matching value. In simple words, it maps the keys with the value.

<h3>Hash Function</h3>
    The hash function takes an input (often a key) and produces a hash code, which is then used to determine the index where the corresponding value should be stored or retrieved in the hash table.

<h3>Collision</h3>
    Collisions happen when two or more keys point to the same array index. Chaining, open addressing, and double hashing are a few techniques for resolving collisions.
    <ul>
        <li><h5>Seperate Chaining:</h5> Separate chaining is a technique used to handle collisions in hash tables. Collisions occur when two or more keys hash to the same index or bucket in the hash table. Separate chaining addresses this issue by allowing multiple items (usually in the form of a linked list) to be stored in the same bucket.<li>
    </ul>
    <ul>
        <li><h5>Open Addressing: </h5>Open addressing is another technique used to handle collisions in hash tables. Unlike separate chaining, where collisions are resolved by storing multiple items in the same bucket (using a linked list, for example), open addressing resolves collisions by finding an alternative location within the hash table to store the colliding item.
        Here are some common probing strategies used in open addressing:
            <ul>
                <li>Linear Probing: 
                    In linear probing, the hash table is searched sequentially that starts from the original location of the hash. If in case the location that we get is already occupied, then we check for the next location. 
                </li>
                <li>Quadratic Probing : 
                    Quadratic probing is a method to resolve collisions that can occur during the insertion of data into a hash table. When a collision takes place (two keys hashing to the same location), quadratic probing calculates a new position by adding successive squares of an incrementing value (usually starting from 1) to the original position until an empty slot is found.
                </li>
                <li>Double Hashing : 
                   The intervals that lie between probes are computed by another hash function. Double hashing is a technique that reduces clustering in an optimized way.
                </li>
            </ul>
        <li>
    </ul>

<h3>Load Factor</h3>
    A hash table’s load factor is determined by how many elements are kept there in relation to how big the table is. The table may be cluttered and have longer search times and collisions if the load factor is high. An ideal load factor can be maintained with the use of a good hash function and proper table resizing.
