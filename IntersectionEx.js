function intersection(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    return [...set1].filter(x => set2.has(x));
}

console.log(intersection([1,2,2,1],[2,2]));
