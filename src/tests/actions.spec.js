import { addTodo, setVisibilityFilter, toggleTodo } from '../actions';

describe('Testing action creaters', () => {

    it('test addTodo action creater with normal input', () => {
        let someTodo = addTodo("first todo");
        expect(someTodo).toEqual({
            type: 'ADD_TODO',
            id: 0,
            value: "first todo",
        });
    });

    
    it('test setVisibilityFilter action creater with normal input', () => {
        let filter = "ACTIVE";
        let someObj = setVisibilityFilter(filter);
        expect(someObj).toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter,
        });
    });

    it('test toggleTodo action creater with normal input', () => {
        let id = 1;
        let someObj = toggleTodo(id);
        expect(someObj).toEqual({
            type: 'TOGGLE_TODO',
            id,
        });
    });
});
