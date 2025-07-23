interface StockInfoColumnProps {
    title: string;
    value: string;
  }
  
  const StockInfoColumn: React.FC<StockInfoColumnProps> = ({ title, value }) => {
    return (
      <article className="border-white border-r w-56 flex flex-col items-center gap-3 py-6">
        <h3 className="text-primaryColor font-semibold text-md">{title}</h3>
        <p className="font-semibold text-sm">{value}</p>
      </article>
    );
  };
  
  export default StockInfoColumn;
  