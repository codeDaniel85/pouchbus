create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    -- create a anonymous profile for the user
    -- insert into public.profiles (user_id, login_id, password, user_name, phone_number, avatar, signup_type, devide_token, etc_1, etc_2, etc_3, etc_4, etc_5)
    -- values (new.id, new.login_id, new.password, new.user_name, new.phone_number, new.avatar, new.signup_type, new.devide_token, new.etc_1, new.etc_2, new.etc_3, new.etc_4, new.etc_5);
    if new.raw_app_meta_data is not null then
        if new.raw_app_meta_data ? 'provider' and new.raw_app_meta_data ->> 'provider' = 'email' then
            insert into public.profiles (user_id, login_id, user_name, signup_type)
            values (new.id, new.email, 'mr.'||substr(md5(random()::text), 1, 8), 'email');
        end if;
    end if;
    return new;
end;
$$;

create trigger user_to_profile_trigger
after insert on auth.users
for each row
execute function public.handle_new_user();
