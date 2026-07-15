import { Form} from "react-bootstrap";
import { TPostStatus } from "../types";

interface PostFilterProps {
  selectedPostStatus: TPostStatus;
  setSelectedPostStatus: (status: TPostStatus) => void;
}
const PostFilter = ({ selectedPostStatus, setSelectedPostStatus }: PostFilterProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPostStatus(e.target.value as TPostStatus);
  }

  return (
    <>
        <h5>Filter By Status</h5>
        <Form.Select value={selectedPostStatus} onChange={onChangeHandler}>
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="block">Block</option>
        </Form.Select>
      </>
  )
}

export default PostFilter
