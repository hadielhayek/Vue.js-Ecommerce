export const IO = (item:any, options:any) => {
    return new Promise<void>((resolve) => {
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry.target)
                    resolve();
                }
            });
        }, options);
        observer.observe(item);
    });
};