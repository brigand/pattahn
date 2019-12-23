class Entry {
  constructor(map, key) {
    this.map = map;
    this.key = key;
  }

  get() {
    let item = this.getInternal();

    return item ? item.value : item;
  }

  exists() {
    return !!this.getInternal();
  }

  getIncr() {
    let item = this.getInternal();
    if (item) {
      item.count += 1;
      return item.value;
    }
    return null;
  }

  getInternal() {
    return this.map.get(this.key) || null;
  }

  orInsert(value, count = 1) {
    let item = this.getInternal();
    if (item) {
      item.count += 1;
    } else {
      item = { value, count };
      this.map.set(this.key, item);
    }
    return item.value;
  }

  drop() {
    let item = this.get();
    if (item && item.count <= 1) {
      this.map.delete(this.key);
      return item.value;
    } else if (item) {
      return item.value;
      item.count -= 1;
    } else {
      return null;
    }
    return item && item.value;
  }
}

class RcMap {
  constructor(parent) {
    this.inner = new Map((parent && parent.inner) || undefined);
  }

  entry(key) {
    return new Entry(this.inner, key);
  }
}

RcMap.Entry = Entry;

module.exports = RcMap;
