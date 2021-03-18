members =([['David Abram'], ['Robin Attfield'],'Thomas Berry',['Paul R.Ehrlich'],'donna Haraway',' BrIaN_gOodWiN  ', {0: 'Serenella Iovino' },'Erazim Kohak','  val_plumwood',])
str=""
for(i=0;i<members.length;i++)
{
    str+=members[i][0]
}
str.toUpperCase()
arr=str.split("")


arr.sort()
str=arr.join('-')
console.log(str)

