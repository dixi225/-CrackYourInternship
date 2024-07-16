class Solution {
    public String simplifyPath(String s) {
        Stack<String>stack=new Stack<>();
        int n=s.length();
        int i=1;
        while(i<n){
            if(s.charAt(i)=='.'){
                int count=0;
                String temp="";
                while(i<n&&s.charAt(i)!='/'){
                    temp+=s.charAt(i);
                    if(s.charAt(i)=='.') count++;
                    i++;
                } 
                if(temp.length()==2&&count==2){
                    System.out.println(temp);
                    if(!stack.isEmpty())stack.pop();
                } 
                else if(temp.length()>1) stack.push(temp);
                i++;
            }
            else if(s.charAt(i)=='/'){
               while(i<n&&s.charAt(i)=='/') i++;
            }
            else{
                String temp="";
                while(i<n&&s.charAt(i)!='/'){
                    temp+=s.charAt(i);
                    i++;
                }
                stack.push(temp);
                i++;
            }
        }

        String ans="";
        while(!stack.isEmpty()){
            ans="/"+stack.pop()+ans;
        }
        return (ans.equals("")?"/":ans);
    }
}