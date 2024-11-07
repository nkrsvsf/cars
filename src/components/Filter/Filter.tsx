import React, { useState } from 'react';

const Filter: React.FC = () => {
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedBikeType, setSelectedBikeType] = useState<string | null>(null);
    const [selectedEngine, setSelectedEngine] = useState<string | null>(null);
    const [selectedOther, setSelectedOther] = useState<string | null>(null);
    const [rentalPeriod, setRentalPeriod] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    const brands = ['любой', 'honda', 'yamaha', 'kawasaki', 'benelli', 'adv', 'pcx', 'vario', 'scoopy', 'next'];
    const bikeTypes = ['любой', 'scooter', 'sport', 'enduro', 'street'];
    const engines = ['электро', '110cc', '150cc', '160cc', '200cc'];
    const others = ['ABS', 'ТОЛЬКО с STNK (можно на паром)', 'ТОЛЬКО с surfrack 🏄', 'ТОЛЬКО в пленке'];
    const rentalPeriods = ['месяц', 'неделя', 'день'];

    const handleSelection = (setter: React.Dispatch<React.SetStateAction<string | null>>, value: string) => {
        setter((prevValue) => (prevValue === value ? null : value));
    };

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    const isExpanded = (selectedItem: string | null) => selectedItem !== null && selectedItem !== 'любой';

    return (
        <div
            className={`p-4 rounded-lg max-w-md mx-auto transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-[#18181b]'
            }`}
            style={{ backgroundColor: isDarkMode ? '#18181b' : '#ffffff' }}
        >
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-medium text-center">BailOneRent</h1>
                <button
                    onClick={toggleTheme}
                    className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
                >
                    {isDarkMode ? 'Светлая тема' : 'Темная тема'}
                </button>
            </div>

            <div className="mb-4">
                <h2 className="text-sm font-normal">марка</h2>
                <div
                    className={`flex ${isExpanded(selectedBrand) ? 'flex-wrap' : 'overflow-x-auto whitespace-nowrap'} gap-2 mt-2`}
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {brands.map((brand) => (
                        <button
                        key={brand}
                        onClick={() => handleSelection(setSelectedBrand, brand)}
                        className={`px-4 py-2 rounded-lg flex-1 ${selectedBrand === brand ? (isDarkMode ? 'bg-red-500 bg-opacity-50' : 'bg-[#18181b] text-white') : ''} font-light`}
                        style={{
                            backgroundColor: selectedBrand === brand
                                ? isDarkMode
                                    ? 'rgba(69, 10, 10, 0.5)'
                                    : '#18181b'
                                : (isDarkMode ? '#27272a' : '#ffffff'),
                            border: isDarkMode ? 'none' : '1px solid #18181b',
                            color: selectedBrand === brand && !isDarkMode ? '#ffffff' : (isDarkMode ? '#ffffff' : '#18181b'),
                        }}
                    >
                        {brand}
                    </button>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-sm font-normal">тип байка</h2>
                <div
                    className={`flex ${isExpanded(selectedBikeType) ? 'flex-wrap' : 'overflow-x-auto whitespace-nowrap'} gap-2 mt-2`}
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {bikeTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => handleSelection(setSelectedBikeType, type)}
                            className={`px-4 py-2 rounded-lg flex-1 ${selectedBikeType === type ? (isDarkMode ? 'bg-red-500 bg-opacity-50' : 'bg-[#18181b] text-white') : ''} font-light`}
                            style={{
                                backgroundColor: selectedBikeType === type
                                    ? isDarkMode
                                        ? 'rgba(69, 10, 10, 0.5)'
                                        : '#18181b'
                                    : (isDarkMode ? '#27272a' : '#ffffff'),
                                border: isDarkMode ? 'none' : '1px solid #18181b',
                                color: selectedBikeType === type && !isDarkMode ? '#ffffff' : (isDarkMode ? '#ffffff' : '#18181b'),
                            }}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-sm font-normal">объем двигателя / электро</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                    {engines.map((engine) => (
                        <button
                        key={engine}
                        onClick={() => handleSelection(setSelectedEngine, engine)}
                        className={`px-4 py-2 rounded-lg ${selectedEngine === engine ? (isDarkMode ? 'bg-red-500 bg-opacity-50' : 'bg-[#18181b] text-white') : ''} font-light`}
                        style={{
                            backgroundColor: selectedEngine === engine
                                ? isDarkMode
                                    ? 'rgba(69, 10, 10, 0.5)'
                                    : '#18181b'
                                : (isDarkMode ? '#27272a' : '#ffffff'),
                            border: isDarkMode ? 'none' : '1px solid #18181b',
                            color: selectedEngine === engine && !isDarkMode ? '#ffffff' : (isDarkMode ? '#ffffff' : '#18181b'),
                        }}
                    >
                        {engine}
                    </button>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-sm font-normal">прочее</h2>
                <div className="flex flex-col gap-2 mt-2">
                    {others.map((other) => (
                        <button
                        key={other}
                        onClick={() => handleSelection(setSelectedOther, other)}
                        className={`px-4 py-2 rounded-lg w-full ${selectedOther === other ? (isDarkMode ? 'bg-red-500 bg-opacity-50' : 'bg-[#18181b] text-white') : ''} font-light`}
                        style={{
                            backgroundColor: selectedOther === other
                                ? isDarkMode
                                    ? 'rgba(69, 10, 10, 0.5)'
                                    : '#18181b'
                                : (isDarkMode ? '#27272a' : '#ffffff'),
                            border: isDarkMode ? 'none' : '1px solid #18181b',
                            color: selectedOther === other && !isDarkMode ? '#ffffff' : (isDarkMode ? '#ffffff' : '#18181b'),
                        }}
                    >
                        {other}
                    </button>
                    ))}
                </div>
            </div>

            <div className="mt-6 text-center">
                <button 
                    className="bg-[#404040] text-white px-4 py-2 rounded-lg font-semibold w-full transition duration-300 hover:bg-[#333333]"
                >
                    ПОКАЗАТЬ
                </button>
            </div>
        </div>
    );
};

export default Filter;