async function BookDetails({
  params,
}: {
  params: Promise<{ authorId: string; bookId: string }>;
}) {
  const { authorId, bookId } = await params;
  return (
    <div>
      BookDetails : {bookId} by author id : {authorId}
    </div>
  );
}

export default BookDetails;
