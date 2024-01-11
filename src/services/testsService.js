import { TESTS_API_URL } from "../constants/urls";
import { deleteFetch, getFetch, postFetch, updateFetch } from "../utils/fetcher";

export const getAllTests = async () => {
    return await getFetch(TESTS_API_URL);
};

export const createTest = async ({ user_name, test_name, priority, status }) => {
    const testData = { user_name, test_name, priority, status };
    return await postFetch(TESTS_API_URL, testData);
};

export const destroyTest = async ({ test_id }) => {
    return await deleteFetch(TESTS_API_URL, test_id);
}

export const modifyTest = async ({ _id, user_name, test_name, priority, status }) => {
    const testData = { test_id: _id, user_name, test_name, priority, status }
    return await updateFetch(TESTS_API_URL, testData)
}
