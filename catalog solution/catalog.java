import org.json.JSONObject;

import java.math.BigInteger;

public class PolynomialConstantTerm {
    public static void main(String[] args) {
        String jsonString = "{ \"keys\": { \"n\": 9, \"k\": 6 }, \"1\": { \"base\": \"10\", \"value\": \"28735619723837\" }, \"2\": { \"base\": \"16\", \"value\": \"1A228867F0CA\" }, \"3\": { \"base\": \"12\", \"value\": \"32811A4AA0B7B\" }, \"4\": { \"base\": \"11\", \"value\": \"917978721331A\" }, \"5\": { \"base\": \"16\", \"value\": \"1A22886782E1\" }, \"6\": { \"base\": \"10\", \"value\": \"28735619654702\" }, \"7\": { \"base\": \"14\", \"value\": \"71AB5070CC4B\" }, \"8\": { \"base\": \"9\", \"value\": \"122662581541670\" }, \"9\": { \"base\": \"8\", \"value\": \"642121030037605\" }}";
        
        JSONObject json = new JSONObject(jsonString);
        int n = json.getJSONObject("keys").getInt("n");
        int k = json.getJSONObject("keys").getInt("k");
        
        BigInteger[] roots = new BigInteger[k];

        for (int i = 1; i <= n; i++) {
            String baseStr = json.getJSONObject(String.valueOf(i)).getString("base");
            String valueStr = json.getJSONObject(String.valueOf(i)).getString("value");
            int base = Integer.parseInt(baseStr);
            BigInteger value = decodeValue(valueStr, base);
            if (i <= k) {
                roots[i - 1] = value;
            }
        }

        BigInteger c = BigInteger.ONE;
        for (BigInteger root : roots) {
            c = c.multiply(root);
        }

        System.out.println("Constant term c: " + c);
    }

    private static BigInteger decodeValue(String value, int base) {
        return new BigInteger(value, base);
    }
}
