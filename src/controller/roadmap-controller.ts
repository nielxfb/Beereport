const handleSubmitRoadmap = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    for (const key of data.keys()){
        console.log(key, data.get(key));
    }
}

export { handleSubmitRoadmap };