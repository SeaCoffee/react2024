import { useSearchParams } from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({ page: '1' });

    const page = query.get('page');
    console.log('Current page', page);

    const prevPage = () => {
        const newQuery = new URLSearchParams(query);
        newQuery.set('page', Math.max(1, +newQuery.get('page') - 1).toString());
        setQuery(newQuery);
        console.log('Previous:', newQuery.get('page'));
    };

    const nextPage = () => {
        const newQuery = new URLSearchParams(query);
        newQuery.set('page', (+newQuery.get('page') + 1).toString());
        setQuery(newQuery);
        console.log('Next page', newQuery.get('page'));
    };

    return {
        page,
        prevPage,
        nextPage
    };
};

export {
    usePageQuery
};
