export const filterProducts = (products, userAnswers) => {
    const normalizeValue = value => value?.toLowerCase();

    const filteredProducts = products.filter(product => {
        const { title, tags, body_html: description } = product;
        const productTitle = normalizeValue(title);
        const productTags = tags.map(tag => normalizeValue(tag));
        const productDescription = normalizeValue(description);

        const matchesUserAnswers = userAnswers.some(answer => {
            const { hairType, washFrequency, benefit, hairIssue, hairColor } = answer;
            const userKeywords = [hairType, washFrequency, benefit, hairIssue, hairColor].map(keyword => normalizeValue(keyword));

            return [productTitle, productDescription, ...productTags].some(text => userKeywords
                .some(keyword => text.includes(keyword)));
        });

        return matchesUserAnswers;
    });

    return filteredProducts;
}