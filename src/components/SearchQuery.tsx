import { FormGroup, FormControl } from "react-bootstrap"

interface SearchQueryProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}
const SearchQuery = ({ searchQuery, setSearchQuery }: SearchQueryProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const querySubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="">
      <h5>Search</h5>
      <form onSubmit={querySubmitHandler}>
        <FormGroup className="mb-3">
          <FormControl type="text" placeholder="Search" value={searchQuery} onChange={onChangeHandler} />
        </FormGroup>
      </form>
    </div>
  )
}

export default SearchQuery