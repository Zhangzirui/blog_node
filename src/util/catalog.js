const hTagArr = ['h2', 'h3', 'h4'];

export const splitArticle = (artilce) => {
    const titleTag = /<h1[^>]*>([^<]*)?<\/h1>/;
    let title = '';
    let content = artilce.replace(titleTag, (marchStr, group1) => {
        title = group1;
        return '';
    });

    return {
        title,
        content
    };
};

export const parseContentToCatalog = (content) => {
    const hTag = new RegExp(`<(${hTagArr.join('|')})[^>]*>([^<]*)?</(?:${hTagArr.join('|')})>`, 'g');
    let valueArr = hTag.exec(content);
    let catalog = [];
    let titleIndex = {};
    while (valueArr) {
        const tag = valueArr[1];

        if (typeof titleIndex[tag] === 'undefined') {
            titleIndex[tag] = 0;
        } else {
            titleIndex[tag] += 1;
        }
        catalog.push({
            tag,
            content: valueArr[2],
            index: titleIndex[tag]
        });
        valueArr = hTag.exec(content);
    }
    return catalog;
};
