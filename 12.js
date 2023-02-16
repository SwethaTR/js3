const arr=["varshini","hema",1,2,3,4,"sheryl"]
function getStringLists(arr)
{
	const arr1=arr.filter(num=>typeof num=="string")
	return(arr1)
}
console.log(getStringLists(arr))