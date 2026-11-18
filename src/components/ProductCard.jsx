function ProductCard({producto}) {
    return (
        <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col">
            <div className="relative h-52 bg-indigo-50 flex items-center justify-center overflow-hidden">
                {producto.badge && (
                    <span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white">
                        {producto.badge}
                    </span>
                )}
                <img src={producto.image} alt={producto.title} className="h-full w-full object-contain p-4" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>{producto.category}</span>
                        <span className="text-yellow-500 font-semibold">★ {producto.rating} ({producto.reviews})</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{producto.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        {producto.description}
                    </p>
                </div>
                <div className="mt-6">
                    <details className="mb-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <summary className="font-semibold text-indigo-600 cursor-pointer flex items-center justify-between">
                            <span>Ver especificaciones</span>
                            <svg className="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                            {producto.specifications.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    </details>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-2xl font-extrabold text-gray-900">{producto.price}</span>
                        <a href="#contacto" className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200">
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard