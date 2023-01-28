let a: number[] = [1,3,5,7,9, 14, 2, 5, 0, 1, 10, 16, 4, 3, 6, 5, 22];

function merge(a:number[], b:number[]):number[] {
    let c:number[] = [];
    let i:number = 0; let j:number = 0;
    let k:number = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c[k] = a[i];
            k++;
            i++;
        } else {
            c[k] = b[j];
            k++;
            j++;
        }
    }
        while(i < a.length) {
            c[k] = a[i];
            k++;
            i++;
        }
        while(j < b.length) {
            c[k] = b[j];
            k++;
            j++;
        }
        return c;
}

function sort(a:number[]) {
    let n = a.length
    if (n <= 1) {
        return a;
    }
    let l:number[] = a.slice(0, n/2);
    let r: number[] = a.slice(n/2, n);
    l = sort(l);
    r = sort(r);
    return merge(l,r);
}
