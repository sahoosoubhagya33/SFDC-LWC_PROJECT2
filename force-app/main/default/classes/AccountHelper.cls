public class AccountHelper {
	
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        list<Account> varResult = new list<Account>();
        varResult = [SELECT Id, Name, Phone, Industry FROM Account LIMIT 16 ];
        return varResult;
    }
}